---
title: Dataview 插件使用技巧
description: 用 Dataview 把 Obsidian 变成数据库的 5 个实用查询
tags: [dataview, 插件, 教程]
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800
created: 2026-04-05T03:36:16+08:00
updated: 2026-04-06T03:45:57+08:00
series: 插件教程
popular: true
webtab:
  - plugin
  - memo
blogID:
  - Dataview
---

# Dataview 插件使用技巧

## 查询所有未完成任务

```dataview
TASK FROM "日记"
WHERE !completed
```

## 按标签统计笔记数

```dataview
TABLE length(rows) AS 数量
FROM #笔记
GROUP BY file.tags
```

更多技巧敬请期待...
