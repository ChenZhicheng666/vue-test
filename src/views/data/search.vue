<template>

</template>

<script>
  export default {
    name: 'search',
    data() {
      return {
        fileList: [],
        imgList: [],
        dialogImageUrl: '',
        logVisible: false
      }
    },
    methods: {
      test()
      {
        console.log(this.imgList)
      },
      show(file, fileList)
      {
        // console.log(file.url);
        // console.log(file)
        // console.log(fileList)
        this.imgList.push(file);
      },
      handleRemove(file, fileList)
      {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file)
      {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        console.log(file.url)
      }
    }
  }
</script>

<style scoped>

</style>
