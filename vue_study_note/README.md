# vue_study_note

## Get Config

```
npm config get registry

npm install -g cnpm --registry=https://registry.npm.taobao.org
npm config set registry https://registry.npmmirror.com

npm ---- https://registry.npmjs.org/
cnpm --- http://r.cnpmjs.org/
taobao - https://registry.npmmirror.com
edunpm - http://registry.enpmjs.org/
eu ----- http://registry.npmjs.eu/
au ----- http://registry.npmjs.org.au/
sl ----- http://npm.strongloop.com/
nj ----- https://registry.nodejitsu.com/
pt ----- http://registry.npmjs.pt/

```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## sudo rm -rf node_modules package-lock.json && npm install

## 一、属性 ref

    1. 被用来给元素或子组件注册引入信息（id 的替代者）
    2. 应用在 html 标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
    3. 使用方式
        打标识：<h1 ref="xxx"> …… <h1> 或 <VC ref="xxx" />
        获取：this.$refs.xxx 或 this.$refs["xxx"]

## 二、vm 配置项 props

    1. 功能：让组件接收外部传入的数据
    2. 传递数据写法：
        <VC name="Sora" :sex="'男'" :age="18" />
    3. 接收数据写法：
        ① 简单接收：
            props:['name','sex','age']

        ② 只限制类型：
            props:{
                name:String,
                sex:String,
                age:Number,
            }

        ③ 限制类型、限制必要性、设置默认值：
            props:{
                name:{
                    type: String,
                    required: true,
                    default: "No Name",
                }
            }
    4. props是只读的，Vue底层会监测你对props的修改，如果进行了修改就会发出警告，
        若业务需求确实需要修改，name请复制props的内容到data中一份，然后去修改data中的数据
        props: {name: String, },    data() { return { myName: this.name,} };

## 三、vm 配置项 mixin（混入）

    1. 功能：可以把多个组件共用的配置提取成一个混入对象
    2. 使用方式：
        第一步 定义混合
            在新建一个hunhe.js中写
            export const xxx1 = {
                data(){x: 1, y: 2, ...},
                methods:{m1(){}, m2(){}, ... },
                mounted(){...},
                ...
            }
            export const xxx2 = {...}
            ...
        第二步 使用混入
            先导入混合  import {xxx1, xxx2, ...} from "hunhe.js"
            (1) 全局混入：在main.js中，Vue.mixin(xxx)   不推荐，会消耗性能
            (2) 局部混入(子组件中): 添加配置项 mixin:[ xxx1, xxx2 ]
    3. 混合与原组件中配置冲突
        (1) data、methods 等命名冲突：混合不会破坏原组件的配置
        (2) mounted 等生命周期钩子：会先执行混合中的生命周期钩子，再执行原组件中的

## 四、插件 Vue.use(Plugins)

    1. 功能：导入外部插件，用于增强Vue
    2. 本质：包含 install 方法的一个对象，install 的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    3. 定义插件：
        对象.install = function (Vue, options) {
            // 1. 添加全局过滤器
            Vue.filter(...);
            // 2. 添加全局自定义指令
            Vue.directive(...);
            // 3. 添加全局混入
            Vue.mixin(...);
            // 4. 添加实例方法
            Vue.prototype.$myMethod = function (){...};
            Vue.prototype.$myProperty = xxx;
        }
    4. 使用插件:
        import Plugins from "./Plugins.js"
        Vue.use(Plugins,1,2,3,...)

## 八、组件的自定义事件

    1. 一种组件间通信的方式，适用于：子组件 ===> 父组件
    2. 使用场景：A是父组件，B是子组件。B想给A传数据，name就要在A中给B绑定自定义事件（事件的回调在A事件中）
    3. 绑定自定义事件：
        (1) 第一种方式：在父组件中：<DemoVC @defEvent="method" /> 或 <DemoVC v-on:defEvent="method" />

        (2) 第二种方式：在父组件中：
            <DemoVC ref="DemoVCId" />
            mounted(){
                this.$refs.DemoVCId.$on("defEvent", this.method);
            }
        (3) 若想让自定义事件只能触发一次，可以使用once修饰符，或者$once方法
    4. 在子组件中触发自定义事件：this.$emit("defEvent", param1, param2, ...)
    5. 在子组件中解绑自定义事件：this.$off("defEvent")
    6. 组件上也可以绑定原生DOM事件，但是需要使用native修饰符，如<DemoVC @click.native="method" />
    7. 注意：通过this.$refs.DemoVCId.$on("defEvent",回调函数)绑定自定义事件时，回调要么配置在methods中，要么使用箭头函数，否则this指向会出问题！
