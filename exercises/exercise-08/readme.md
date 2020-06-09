# 第八题

这道题是考察有泛型 type 的复用

```javascript
type ApiResponse<T> = {
    status: 'success';
    data: T;
  } |
  {
      status: 'error';
      error: string;
  }

```

可以看到，该题所有的 ApiResponse 的泛型，结构都是一样的，不同的点在 success 状态下的 data。所以我们可以通过泛型，把 data 变成泛型 T。在确认 data 类型之后，传入类型。

``` javascript
ApiResponse<number>
type AdminsApiResponse = ApiResponse<Admin[]>
```
