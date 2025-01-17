import { effect } from '../effect'
import {  ref } from '../ref'


describe('ref测试',()=>{
  it('ref基本使用',()=>{
    const r = ref(0)
    let val
    effect(() => {
      val = r.value
    })
    expect(val).toBe(0)
    r.value++
    expect(val).toBe(1)
  })

  it('ref复杂数据，其实也是用了reactive',()=>{
    const r = ref({name:'world'})
    let val
    effect(() => {
      val = r.value.name
    })
    expect(val).toBe('world')
    r.value.name = '重学前端'
    expect(val).toBe('重学前端')
  })
})