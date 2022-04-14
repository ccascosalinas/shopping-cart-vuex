<template lang="pug">
figure.cloudinary-asset
  img(v-if='isImage', :src='thumbnail')
  fa(v-else='', :icon='icon', size='4x')
</template>

<script>
  import cloudinary from 'cloudinary-core'
  import { last } from 'lodash'

  const Cloudinary = cloudinary.Cloudinary.new({ cloud_name: 'guidedsteps' })

  export default {
    props: {
      cloudinaryTypeId: {
        type: Number,
        required: false,
        default: 1,
      },
      cloudinaryTargetId: {
        type: Number,
        required: false,
        default: 1,
      },
      caption: {
        type: String,
        required: false,
        default: '',
      },
      title: {
        type: String,
        required: false,
        default: '',
      },
      description: {
        type: String,
        required: false,
        default: '',
      },
      payload: {
        type: Object,
        required: true,
      },
      payloadConfig: {
        type: Object,
        required: false,
        default: () => {
          return {}
        },
      },
      payloadAdmin: {
        type: Object,
        required: false,
        default: () => {
          return {}
        },
      },
    },
    data() {
      return {}
    },
    computed: {
      thumbnail() {
        return Cloudinary.url(this.payload.public_id, {
          transformation: ['thumbnail'],
          format: 'jpg',
          secure: true,
        })
      },
      extension() {
        return last(this.payload.secure_url.split('.'))
      },
      isImage() {
        return (
          this.payload.resource_type === 'image' &&
          this.payload.format !== 'pdf'
        )
      },
      isVideo() {
        return (
          this.payload.resource_type === 'video' &&
          this.payload.format !== 'mp3'
        )
      },
      icon() {
        switch (this.extension) {
          case 'zip':
          case 'gz':
          case 'rar':
            return ['fal', 'file-archive']

          case 'pdf':
            return ['fal', 'file-pdf']

          case 'xls':
          case 'xlsx':
            return ['fal', 'file-spreadsheet']

          case 'doc':
          case 'docx':
            return ['fal', 'file-word']

          case 'mp3':
          case 'wav':
            return ['fal', 'file-audio']

          case 'mpeg':
          case 'mpg':
          case 'mp4':
          case 'wmv':
          case 'flv':
            return ['fal', 'file-video']

          case 'jpeg':
          case 'jpg':
          case 'gif':
          case 'tif':
          case 'tiff':
          case 'png':
            return ['fal', 'file-image']

          default:
            return ['fal', 'file']
        }
      },
    },
    mounted() {},
    methods: {},
  }
</script>

<style>
  figure.cloudinary-asset {
    min-width: 20%;
    margin: auto auto;
  }
</style>