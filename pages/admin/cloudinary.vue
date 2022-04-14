<template lang="pug">
.cloudinary
  .columns.admin-title
    .column
      h2.title.is-size-4
        span.icon
          // fa(:icon="['fal', 'images']")
        span Media Manager
  .columns.admin-editor
    .column
      form.form
        .columns
          .column.is-two-thirds
            .field.is-horizontal
              .field-label
                label.label Media Type
              .field-body
                .field
                  .select
                    select(
                      v-model='model.cloudinary.cloudinaryTypeId',
                      @change='updateFileFormat'
                    )
                      option(v-for='(i, x) in state.types', :value='i.id') {{ i.name }}
            .field.is-horizontal
              .field-label
                label.label Target
              .field-body
                .field
                  .select
                    select(v-model='model.cloudinary.cloudinaryTargetId')
                      option(v-for='(i, x) in state.targets', :value='i.id') {{ i.name }}
            .field.is-horizontal
              .field-label
                label.label Tags
              .field-body
                .field
                  input.input.is-2(
                    placeholder='New Tag',
                    @keypress.enter.prevent='addTag'
                  )
            .field.is-horizontal
              .field-label
                label.label
              .field-body
                .field.is-grouped.is-grouped-multiline
                  .control(v-for='(tag, i) in state.tags')
                    span.tag.is-small.is-primary {{ tag }}
                      button.delete.is-small(
                        @click.prevent='deleteTag(i)',
                        :class='{ "is-hidden": tag === "browser_upload" }'
                      )
            .field.is-horizontal
              .field-label
                label.label Title
              .field-body
                .field
                  input.input(
                    placeholder='Asset Title',
                    v-model='model.cloudinary.title'
                  )
            .field.is-horizontal
              .field-label
                label.label Caption
              .field-body
                .field
                  input.input(
                    placeholder='Asset Description (optional)',
                    v-model='model.cloudinary.caption'
                  )
            .field.is-horizontal
              .field-label
                label.label Description
              .field-body
                .field
                  textarea.textarea(
                    placeholder='Asset Description (optional)',
                    v-model='model.cloudinary.description',
                    rows='2'
                  )
            .field.is-horizontal(v-if='model.cloudinary.id')
              .field-label
                label.label
              .field-body
                .field
                  a.button.is-warning(@click='updateAsset')
                    span.icon
                      // fa(:icon="['fal', 'save']")
                    span Update
                .field
                  a.button(@click='reset')
                    span.icon
                      // fa(:icon="['fal', 'ban']")
                    span Cancel
            .field.is-horizontal(v-else='')
              .field-label
                label.label
              .field-body
                .field
                  a.button.is-primary(@click='uploadAssets')
                    span.icon
                      // fa(:icon="['fal', 'upload']")
                    span Upload
                .field
                  a.button(@click='reset')
                  span.icon
                    // fa(:icon="['fal', 'ban']")
                  span Cancel
          .column
            .dropzone(
              @click='$refs.fileElem.click()',
              @drop='drop',
              @dragenter='dragenter',
              @dragover='dragover',
              @dragend='dragout',
              @dragleave='dragout',
              @dragexit='dragout',
              :class='{ drag: loading.dropzone }'
            )
              .dropwrapper
                span.icon
                  // fa.has-text-grey-lighter(:icon="['fal', 'upload']", size="4x")
                h1.has-text-grey-light.is-2 Drop or Click to Upload
                progress.progress.is-primary(
                  value='0',
                  max='100',
                  ref='progressIndicator'
                )
            input#fileElem.is-hidden(
              type='file',
              ref='fileElem',
              multiple='true',
              :accept='model.acceptType',
              @change='appendFiles'
            )
            .columns(v-if='state.files.length')
              .column
                h4.is-size-4 Pending Files
                ul
                  li(v-for='(i, x) in state.files') {{ i.name }}

  .columns
    .column
      table.table.is-narrow.is-hoverable.is-fullwidth.is-striped
        thead
          tr
            th
            th Target
            th Description
            th Type
        tbody
          tr(v-for='(item, x) in listAssets')
            td
              .field.has-addons(v-if='!item.isEditProtected')
                p.control
                  a.button.is-danger.is-small(@click='deleteAsset(item.id)')
                    span.icon
                      // fa(:icon="['fal', 'trash-alt']")
                p.control
                  a.button.is-warning.is-small(@click='editAsset(item.id)')
                    span.icon
                      // fa(:icon="['fal', 'file-edit']")
            td
              span {{ item.target.name }}
            td
              ul
                li(v-if='item.payload.original_filename')
                  strong Filename:
                  span {{ item.payload.original_filename }}
                li(v-if='item.title')
                  strong Title:
                  span {{ item.title }}
                li(v-if='item.caption')
                  strong Caption:
                  span {{ item.caption }}
                li(v-if='item.description')
                  strong Description:
                  span {{ item.description }}
                li
                  strong Type:
                  span {{ item.type.name }}
                li(v-if='item.payload.tags')
                  strong Tags:
                  template(v-for='(tag, t) in item.payload.tags')
                    span &nbsp;
                    span.tag.is-small.is-success {{ tag }}
            td
              asset(v-bind='item', :key='item.payload.etag')
              // {{ item.payload.resource_type }}
</template>

<script>
import { find, isNil, findIndex, sortBy, cloneDeep } from 'lodash'
const defaultState = {
  targets: [],
  types: [],
  assets: [],
  files: [],
  tags: ['browser_upload'],
  cloudName: 'guidedsteps',
  unsignedUploadPreset: 'ez68pz2p',
}
export default {
  components: {
   asset: () => import('@/components/CloudinaryAsset.vue'),
   },
  // async asyncData({ $axios, $api, route, app, params }) {
  //  const { data } = await $api.cloudinary.cloudinaryData()
  // const returnData = {
  //  state: { ...defaultState, ...(data.data[0] || {}) },
  //  }
  // return returnData
  //  },
  data() {
    return {
      model: {
        cloudinary: {
          cloudinaryTypeId: 1,
          cloudinaryTargetId: 1,
          isEditProtected: 0,
          createdAt: new Date(),
          modifiedAt: new Date(),
          modifiedBy: 0,
          title: 'Test',
          caption: '',
          description: '',
        },
        acceptType: 'image/*',
      },
      loading: {
        dropzone: false,
      },
      state: {
        targets: [{ name: 'General Asset' }],
        files: [],
        types: [{ name: 'image' }],
        unsignedUploadPreset: 'ez68pz2p',
        assets: [],
      },
    }
  },
  computed: {
    listAssets() {
      return sortBy(this.state.assets, ['id']).reverse()
    },
  },
  methods: {
    uploadAssets() {
      for (let i = 0; i < this.state.files.length; i++) {
        this.handleUploadFile(
          this.state.files[i],
          cloneDeep(this.model.cloudinary),
          cloneDeep(this.state.tags)
        )
      }
      this.reset()
    },
    async updateAsset() {
      this.model.cloudinary.payload.tags = this.state.tags
      if (isNil(this.model.cloudinary.payload.context)) {
        this.model.cloudinary.payload.context = {}
      }
      if (isNil(this.model.cloudinary.payload.context.custom)) {
        this.model.cloudinary.payload.context.custom = {}
      }
      this.model.cloudinary.payload.context.custom.alt =
        this.model.cloudinary.title
      this.model.cloudinary.payload.context.custom.caption =
        this.model.cloudinary.caption

      const thisAsset = await this.$api.media.cloudinaryUpdate({
        id: this.model.cloudinary,
        cloudinaryClone: cloneDeep(this.model.cloudinary),
      })
      const pos = findIndex(this.state.assets, {
        id: this.model.cloudinary.id,
      })

      this.$set(this.state.assets, pos, thisAsset.data[0])
      this.reset()
    },
    editAsset(assetId) {
      const thisAsset = find(this.state.assets, { id: assetId })
      this.model.cloudinary = new Cloudinary(cloneDeep(thisAsset))
      this.state.tags = thisAsset.payload.tags
      this.state.files.push({
        name: this.model.cloudinary.payload.original_filename,
      })
    },
    deleteAsset(assetId) {
      this.deleteCloudinaryAsset(assetId)
    },
    async deleteCloudinaryAsset(assetId) {
      const deleteAsset = await this.$api.cloudinary.cloudinaryDelete(assetId)

      if (deleteAsset && deleteAsset.data && deleteAsset.data[0] === 1) {
        const pos = findIndex(this.state.assets, { id: assetId })
        this.state.assets.splice(pos, 1)
      }
    },
    reset() {
      const vm = this
      vm.model.acceptType = 'image/*'
      vm.$refs.progressIndicator.value = 0
      vm.state.tags = ['browser_upload']
      vm.model.cloudinary = {
        cloudinaryTypeId: 1,
        cloudinaryTargetId: 1,
        isEditProtected: 0,
        createdAt: new Date(),
        modifiedAt: new Date(),
        modifiedBy: 0,
        title: '',
        caption: '',
        description: '',
      }
      vm.state.files = []
    },
    addTag(item) {
      if (!isNil(item.target.value) && item.target.value.length) {
        this.tags.push(item.target.value.toLowerCase())
        item.target.value = null
      }
    },
    deleteTag(index) {
      this.state.tags.splice(index, 1)
    },
    updateFileFormat() {
      // const findData = find(this.types, {
      // id: this.model.cloudinary.cloudinaryTypeId,
      // })
      this.model.acceptType = 'image/*'
    },
    dragout(e) {
      this.loading.dropzone = false
    },
    dragenter(e) {
      e.stopPropagation()
      e.preventDefault()
      this.loading.dropzone = true
    },
    dragover(e) {
      e.stopPropagation()
      e.preventDefault()
    },
    drop(e) {
      e.stopPropagation()
      e.preventDefault()

      const dt = e.dataTransfer
      const files = dt.files

      this.loading.dropzone = false
      this.$set(this.state.files, files)
      // this.handleFiles(null, files)
    },
    appendFiles(target, files) {
      const theseFiles = target ? this.$refs.fileElem.files : files
      for (let i = 0; i < theseFiles.length; i++) {
       
        this.state.files.push(theseFiles[i])
      }
    },
    handleFiles(target, files) {
      const theseFiles = target ? this.$refs.fileElem.files : files
      for (let i = 0; i < theseFiles.length; i++) {
        this.handleUploadFile(
          theseFiles[i],
          cloneDeep(this.model.cloudinary),
          cloneDeep(this.state.tags)
        )
      }
    },
    async confirmUpload(payload, state) {
      state.payload = payload
      const asset = await this.$api.media.cloudinaryUpload(state)
      this.state.assets.push(asset.data.data[0])
     
    },
    handleUploadFile(file, state, tags) {
      const url = `https://api.cloudinary.com/v1_1/guidedsteps/upload`
      const xhr = new XMLHttpRequest()
      const vm = this
      const fd = new FormData()
      xhr.open('POST', url, true)
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

      xhr.upload.addEventListener('progress', function (e) {
        const progress = Math.round((e.loaded * 100.0) / e.total)
        vm.$refs.progressIndicator.value = progress
      })

      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // File uploaded successfully
          const response = JSON.parse(xhr.responseText)
          vm.confirmUpload(response, state)
        }
      }

      fd.append('upload_preset', this.state.unsignedUploadPreset)
      //fd.append('tags', tags.join(','))
      fd.append('file', file)

      const context = []
      if (!isNil(state.title)) {
        context.push(`alt=${state.title}`)
      }
      if (!isNil(state.caption)) {
        context.push(`caption=${state.caption}`)
      }
      if (context.length) {
        fd.append('context', context.join('|'))
      }

      xhr.send(fd)
    },
  },
}
</script>

<style>
.dropzone {
  display: block;
  border: dotted 2px silver;
  text-align: center;
  cursor: pointer;
}
.dropwrapper {
  margin: 4em 2em;
}
</style>