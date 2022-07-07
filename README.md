# useState、useEffect、useContext、useReducer解說特性

以下為各個branch名稱和內容的大綱
- noHookNoRender
  - 沒有搭配Hook無法渲染畫面
- useStateButNoUpdateFunction
  - 使用useState，不使用更新函式
- useStateButNumberAddOne
  - 使用setTimeOut並不使用更新函式
- useStateSetState
  - 使用更新函式
- useStateUseUpdateFunction
  - 使用setTimeOut並使用更新函式
- useStateNoLazyInitial
  - 沒有lazyInitial
- useStateUseLazyInitialzer
  - 使用LazyInitialzer
- useEffectPrint
  - 使用useEffect僅在畫面載入時印
- useEffectPrintManyTimes
  - 使用useEffect當畫面任何重新渲染時候印
- useEffectIntervalCleanUp
  - 使用useEffect並且cleanUp
- useEffectCountdownExample
  - 使用useEffect用倒數計時器範例
- propsDrilling
  - 造成props drilling
- useContextProvideConsumer
  - 使用context加入provide和consumer解決過度傳遞
- useContextSimplifyConsumer
  - 使用useContext簡化consumer 
- useContextNestContext
  - 巢狀context只有內層會被顯示
- useReducerInOneComponent
  - 使用useReducer在同一個component
- useReducerInComponent
  - 使用useReducer將reducer拆出
- useReducerAddPayload
  - 使用useReducer添加payload
- separateReducerAndInitialState
  -  使用useReducer拆分出initialState
- useReducerDinefineActiontypeActionCreater
  - 使用useReducer定義actionType和actionCreater