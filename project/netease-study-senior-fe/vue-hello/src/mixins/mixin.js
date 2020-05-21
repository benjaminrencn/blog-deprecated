export default {
  created() {
    console.log('[3.5 mixin] mixin created')
  },
  methods: {
    foo() {
      console.log('[3.5 mixin] mixin foo')
    },
    conflicting() {
      console.log('[3.5 mixin] mixin conflicting')
    },
  },
}
