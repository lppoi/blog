---
title: 复习下JS数组基本使用
date: 2024-01-14
description: 
---

## JS中的数据类型

### 1. **基本数据类型**

> 该数据类型的值在栈中存储，因为占据空间是固定的，可以将他们存在较小的内存中-栈中，这样便于迅速查询变量的值。
> 

Boolean、String、Number、Null、Undefined、Symbol

### 2. **引用数据类型**

> 该数据类型的值在堆中存储，栈中存储的变量只是用来查找堆中的引用地址。
> 

Object、Array、Function、Date等

## 数组的基础概念

数组是一种**集合**，其中的元素按顺序存储，每个元素都有一个**唯一的索引**。这个索引通常是从0开始的整数。数组可以包含各种数据类型，包括数字、字符串、对象等。通过索引，我们能够快速访问和修改数组中的元素。

### 1. **数组初始化**

```jsx
let nameArray = ['张三','李四']
let genderArray=new Array('男','女')

```

### 2. **数组基础用法**

> 数组的长度是可变的，我们可以根据需要动态添加或删除元素。
> 

```jsx
let nameArray = ['张三','李四']

// length 返回当前数组的长度
nameArray.length // 2

// 索引形式访问数组某一项的值
nameArray[0] // 张三

// push 常用于插入数组元素的插入,返回数组长度⭐⭐⭐
nameArray.push('王五') // 3
nameArray // ['张三','李四','王五']

// pop 操作数组删除最后一个元素,返回删除元素⭐⭐⭐
nameArray.pop() // 王五
nameArray // ['张三','李四']

// unshift 将数据插入数组的第一个元素,返回数组长度⭐⭐⭐
nameArray.unshift('小二') // 3
nameArray // ['小二','张三','李四']

// shift 操作数组删除第一个元素,返回删除元素⭐⭐⭐
nameArray.shift() // 小二
nameArray // ['张三','李四']

```

### 3. 数组进阶用法

```jsx
let nameArray = ['张三','李四']

// splice 操作数组来删除元素,返回包含被删除元素的数组⭐⭐⭐
nameArray.splice(2,1) // ['王五']
nameArray // ['张三','李四','赵六']

// 当然 你也可以使用它来在指定索引处插入元素
nameArray.splice(2,0,'王五','赵六') // []
nameArray // ['张三','李四','王五','赵六']

// concat 合并数组，返回新数组⭐⭐⭐
nameArray.concat('七七') // ['张三','李四','赵六','七七']
nameArray.concat(['八八']) // ['张三','李四','赵六','七七','八八']
nameArray // ['张三','李四','赵六','七七','八八']

// slice 截取数组元素,返回新数组⭐
nameArray.slice(1) // ['李四']
// 两个参数时,截取至第二个参数(不包含)的位置
nameArray.slice(1,3) // ['李四','赵六']

// join 将数组元素拼接为字符串并返回，可以指定连接符⭐⭐
nameArray.join() // 张三,李四,赵六,七七,八八
nameArray.join('') // 张三李四赵六七七八八
nameArray.join('-') // 张三-李四-赵六-七七-八八
```

### 4. 数组排序用法