# 第七题

这道题考察了 [Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk) 的用法

```javascript
interface PowerUser {
  type: 'powerUser';
  name: string;
  age: number;
  role: string;
  occupation: string;
}
```

我们想得到上面这样一个类型。但实际上 powerUser 除了 type 不一样之外，它就是一个 User 跟 Admin 的并集。所以可以用，Omit 把 User 跟 Admin 的 type 属性排除掉，生成并集。
