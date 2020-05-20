<template>
  <div>
    LifeCycle {{ number }}
    <input
      type="number"
      ref="input"
      v-model="number"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
    }
  },
  computed: {
    computed1() {
      return this.number * 2
    },
  },
  beforeCreate() {
    console.group('=== 初始化 ===');
    console.log('--- beforeCreate ---');

    console.log(` [data:number] ${this.number} `);
    console.log(` [computed:computed1] ${this.computed1} `);
    console.log(` [method:method1] ${this.method1} `);
    console.log(` [ref:input] ${this.$refs.input} `);
    console.log(` [root] ${this.$root} `);
    console.log(` [parent] ${this.$parent} `);

    console.log(``);
  },
  created() {
    console.log('--- created ---');

    console.log(` [data:number] ${this.number} `);
    console.log(` [computed:computed1] ${this.computed1} `);
    console.log(` [method:method1] ${this.method1} `);
    console.log(` [ref:input] ${this.$refs.input} `);
    console.log(` [root] ${this.$root} `);
    console.log(` [parent] ${this.$parent} `);

    console.groupEnd();
  },
  beforeMount() {
    console.group('=== 挂载 ===');
    console.log('--- beforeMount ---');
    console.log(` [ref:input] ${this.$refs.input} `);
    console.log(` [root] ${this.$root} `);
    console.log(` [parent] ${this.$parent} `);
  },
  mounted() {
    console.log('--- mounted ---');
    console.log(` [ref:input] ${this.$refs.input} `);
    console.log(` [root] ${this.$root} `);
    console.log(` [parent] ${this.$parent} `);

    console.groupEnd();
  },
  beforeUpdate() {
    console.group('=== 模板更新 ===');

    console.log('--- beforeUpdate ---');

    console.log(` number: ${this.number} `);
  },
  updated() {
    console.log('--- updated ---');

    console.log(` number: ${this.number} `);

    console.groupEnd();
  },
  activated() {
    console.group('=== keepAlive 激活 ===');
    console.log('--- activated ---');
  },
  deactivated() {
    console.log('--- deactivated ---');
    console.groupEnd();
  },
  beforeDestroy() {
    console.group('=== 销毁 ===');
    console.log('--- beforeDestory ---');
  },
  destroyed() {
    console.log('--- destoryed ---');

    console.groupEnd();
  },
  methods: {
    method1() {},
  },
}
</script>
