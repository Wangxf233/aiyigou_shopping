// src/types/components.d.ts
import SpSwiper from './SpSwiper.vue'
import SpGuess from '@/components/SpGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    SpSwiper: typeof SpSwiper
    SpGuess: typeof SpGuess
  }
}

//组件实例类型
export type SpGuessInstance = InstanceType<typeof SpGuess>
