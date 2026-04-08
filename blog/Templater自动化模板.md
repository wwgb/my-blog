---
title: Templater 自动化模板
created: 2026-03-26T22:34:00+08:00
updated: 2026-04-04T10:44:10+08:00
description: 用 Templater 让 Obsidian 自动生成日记、笔记模板
tags:
  - templater
  - 插件
  - 自动化
webtab:
  - plugin
  - memo
  - case
banner: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISYfATIwXun8ATPJJeWif1o7ULEBJllAvww&s
blogID:
  - Dataview
---

# Templater 自动化模板

## 日记模板示例

```javascript
const title = tp.date.now("YYYY-MM-DD");
await tp.file.rename(title);
```

## 自定义命令

可以在设置里绑定快捷键，一键插入常用代码块。