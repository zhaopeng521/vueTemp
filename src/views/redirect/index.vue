<script>
export default {
  beforeCreate() {
    const { params, query } = this.$route
    const { path } = params
		console.log(this.$route,'22')
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
