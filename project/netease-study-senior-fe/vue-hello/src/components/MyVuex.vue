<template>
  <div>
    <button id="my-vuex-add">add 3</button>
    <p id="my-vuex"></p>
  </div>
</template>

<script>
import { Store } from '@/utils/vuex'
import { watchEffect } from '@/utils/responsive'

export default {
  mounted() {
    const store = new Store({
      state: {
        count: 0,
      },
      mutations: {
        addCount(state, payload = 1) {
          state.count += payload
        }
      },
      plugins: [
        (store) => store.subscribe((mutation) => console.log('[my vuex] mutaion: ', mutation)),
      ],
    })

    const button = document.getElementById('my-vuex-add')
    button.addEventListener('click', function () {
        store.commit('addCount', 3)
    })
    const container = document.getElementById('my-vuex')
    watchEffect(() => {
      container.innerText = `count: ${store.state.count}`
    })

  },
}
</script>
