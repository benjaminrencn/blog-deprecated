import config from './config'

export const init = () => {
  config.register('locale', {
    zh: {
      module: {
        hot: '热门',
        new: '最新',
        top: '热榜',
      },
    },
    en: {
      module: {
        hot: 'hot',
        new: 'new',
        top: 'top',
      },
    },
  })
}
