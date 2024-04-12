import type { SpGuessInstance } from '@/types/components'
import { ref } from 'vue'

export const useGuessList = () => {
  //获取猜你喜欢组件实例
  const guessRef = ref<SpGuessInstance>()
  //滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  //返回ref和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
