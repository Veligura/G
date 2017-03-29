/**
 * Created by yana on 3/24/17.
 */
import React, { Component } from 'react';
import './ChatRoom.css';
import ChatMessage from './ChatMessage';

var data=[
    {
        "id": "58cc3dcdfe6a638b1ad85a31",
        "text": "@/all кто завтра хочет послушать про CSS Grid Layout, Facebook API плюсуйте в первый пост на сайт, что прийдете (нужно сперва аутентифицироваться, чтобы появилась кнопка +1). Линка на сайт https://kottans-2017-front-end.herokuapp.com/\n",
        "html": "<span data-link-type=\"groupmention\" data-group-name=\"all\" class=\"groupmention\">@/all</span> кто завтра хочет послушать про CSS Grid Layout, Facebook API плюсуйте в первый пост на сайт, что прийдете (нужно сперва аутентифицироваться, чтобы появилась кнопка +1). Линка на сайт <a href=\"https://kottans-2017-front-end.herokuapp.com/\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://kottans-2017-front-end.herokuapp.com/</a>",
        "sent": "2017-03-17T19:49:33.952Z",
        "fromUser": {
            "id": "5745d59dc43b8c601974e33c",
            "username": "AlexPurhalo",
            "displayName": "Alex P",
            "url": "/AlexPurhalo",
            "avatarUrl": "https://avatars-02.gitter.im/gh/uv/3/AlexPurhalo",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/13709279?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/13709279?v=3&s=128",
            "v": 16,
            "gv": "3"
        },
        "unread": false,
        "readBy": 44,
        "urls": [
            {
                "url": "https://kottans-2017-front-end.herokuapp.com/"
            }
        ],
        "mentions": [
            {
                "screenName": "all",
                "userIds": [],
                "group": true,
                "announcement": true
            }
        ],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58cd01aafe6a638b1adaec9e",
        "text": "https://jsfiddle.net/1zcaaoov/",
        "html": "<a href=\"https://jsfiddle.net/1zcaaoov/\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://jsfiddle.net/1zcaaoov/</a>",
        "sent": "2017-03-18T09:45:14.311Z",
        "fromUser": {
            "id": "549de793db8155e6700e3264",
            "username": "AleshaOleg",
            "displayName": "Oleh Aloshkin",
            "url": "/AleshaOleg",
            "avatarUrl": "https://avatars-02.gitter.im/gh/uv/3/AleshaOleg",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=128",
            "v": 13,
            "gv": "3"
        },
        "unread": false,
        "readBy": 42,
        "urls": [
            {
                "url": "https://jsfiddle.net/1zcaaoov/"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58cd09872215a08f049c7aa3",
        "text": "https://jsfiddle.net/oh054ktc/",
        "html": "<a href=\"https://jsfiddle.net/oh054ktc/\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://jsfiddle.net/oh054ktc/</a>",
        "sent": "2017-03-18T10:18:47.113Z",
        "fromUser": {
            "id": "57809d3dc2f0db084a222aaa",
            "username": "Veligura",
            "displayName": "Alex Veligura",
            "url": "/Veligura",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Veligura",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/12152609?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/12152609?v=3&s=128",
            "v": 45,
            "gv": "3"
        },
        "unread": false,
        "readBy": 42,
        "urls": [
            {
                "url": "https://jsfiddle.net/oh054ktc/"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58cd09a0590d72c864de9c8b",
        "text": "https://jsfiddle.net/uxwgfp6c/1/",
        "html": "<a href=\"https://jsfiddle.net/uxwgfp6c/1/\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://jsfiddle.net/uxwgfp6c/1/</a>",
        "sent": "2017-03-18T10:19:12.269Z",
        "fromUser": {
            "id": "549de793db8155e6700e3264",
            "username": "AleshaOleg",
            "displayName": "Oleh Aloshkin",
            "url": "/AleshaOleg",
            "avatarUrl": "https://avatars-02.gitter.im/gh/uv/3/AleshaOleg",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=128",
            "v": 13,
            "gv": "3"
        },
        "unread": false,
        "readBy": 42,
        "urls": [
            {
                "url": "https://jsfiddle.net/uxwgfp6c/1/"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58cd10b87b3f37e7540dad83",
        "text": "https://jsfiddle.net/6xqcLskm/",
        "html": "<a href=\"https://jsfiddle.net/6xqcLskm/\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://jsfiddle.net/6xqcLskm/</a>",
        "sent": "2017-03-18T10:49:28.251Z",
        "fromUser": {
            "id": "549de793db8155e6700e3264",
            "username": "AleshaOleg",
            "displayName": "Oleh Aloshkin",
            "url": "/AleshaOleg",
            "avatarUrl": "https://avatars-02.gitter.im/gh/uv/3/AleshaOleg",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=128",
            "v": 13,
            "gv": "3"
        },
        "unread": false,
        "readBy": 42,
        "urls": [
            {
                "url": "https://jsfiddle.net/6xqcLskm/"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58cd10c16701410e584eb3ca",
        "text": "@/all",
        "html": "<span data-link-type=\"groupmention\" data-group-name=\"all\" class=\"groupmention\">@/all</span>",
        "sent": "2017-03-18T10:49:37.046Z",
        "fromUser": {
            "id": "549de793db8155e6700e3264",
            "username": "AleshaOleg",
            "displayName": "Oleh Aloshkin",
            "url": "/AleshaOleg",
            "avatarUrl": "https://avatars-02.gitter.im/gh/uv/3/AleshaOleg",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=128",
            "v": 13,
            "gv": "3"
        },
        "unread": false,
        "readBy": 41,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58cd1ea56d7eb18404deb710",
        "text": "thanks!",
        "html": "thanks!",
        "sent": "2017-03-18T11:48:53.960Z",
        "fromUser": {
            "id": "5479c5a9db8155e6700d93d8",
            "username": "suchov",
            "displayName": "Artem",
            "url": "/suchov",
            "avatarUrl": "https://avatars-05.gitter.im/gh/uv/3/suchov",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/1478985?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/1478985?v=3&s=128",
            "v": 119,
            "gv": "3"
        },
        "unread": false,
        "readBy": 42,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58cd244d1c040b8e040d6a91",
        "text": "https://github.com/viattik/kottans-facebook-api",
        "html": "<a href=\"https://github.com/viattik/kottans-facebook-api\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://github.com/viattik/kottans-facebook-api</a>",
        "sent": "2017-03-18T12:13:01.672Z",
        "fromUser": {
            "id": "549de793db8155e6700e3264",
            "username": "AleshaOleg",
            "displayName": "Oleh Aloshkin",
            "url": "/AleshaOleg",
            "avatarUrl": "https://avatars-02.gitter.im/gh/uv/3/AleshaOleg",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/1459899?v=3&s=128",
            "v": 13,
            "gv": "3"
        },
        "unread": false,
        "readBy": 41,
        "urls": [
            {
                "url": "https://github.com/viattik/kottans-facebook-api"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fa0358ad4eb02837f629",
        "text": "Доброго всім дня!",
        "html": "Доброго всім дня!",
        "sent": "2017-03-21T10:01:39.936Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 30,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fa5e2215a08f04ab3525",
        "text": "Допоможіть не вдається нормально запуститиvagran up і відповідно потім не можу шел запустити vagrant ssh на віднд 7 (64)..((",
        "html": "Допоможіть не вдається нормально запуститиvagran up і відповідно потім не можу шел запустити vagrant ssh на віднд 7 (64)..((",
        "sent": "2017-03-21T10:03:10.613Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 29,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fa7f58ad4eb02837f85a",
        "text": "візуалізаціі в біосі не має..",
        "html": "візуалізаціі в біосі не має..",
        "sent": "2017-03-21T10:03:43.047Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 29,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fcc4590d72c864ed480a",
        "text": "віртуалізація повинна бути, або в тебе надзвичайно старий комп",
        "html": "віртуалізація повинна бути, або в тебе надзвичайно старий комп",
        "sent": "2017-03-21T10:13:24.595Z",
        "fromUser": {
            "id": "554fda4715522ed4b3e0319b",
            "username": "olessavluk",
            "displayName": "Oles Savluk",
            "url": "/olessavluk",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/olessavluk",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=128",
            "v": 7,
            "gv": "3"
        },
        "unread": false,
        "readBy": 29,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fcd15917e26076b9c31a",
        "text": "ось тут знизу є інструкції для різних біосів - http://amiduos.com/support/knowledge-base/article/enabling-virtualization-in-bios",
        "html": "ось тут знизу є інструкції для різних біосів - <a href=\"http://amiduos.com/support/knowledge-base/article/enabling-virtualization-in-bios\" rel=\"nofollow\" target=\"_blank\" class=\"link\">http://amiduos.com/support/knowledge-base/article/enabling-virtualization-in-bios</a>",
        "sent": "2017-03-21T10:13:37.935Z",
        "fromUser": {
            "id": "554fda4715522ed4b3e0319b",
            "username": "olessavluk",
            "displayName": "Oles Savluk",
            "url": "/olessavluk",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/olessavluk",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=128",
            "v": 7,
            "gv": "3"
        },
        "unread": false,
        "readBy": 30,
        "urls": [
            {
                "url": "http://amiduos.com/support/knowledge-base/article/enabling-virtualization-in-bios"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fcd77b3f37e7541c9088",
        "text": "трохи старий",
        "html": "трохи старий",
        "sent": "2017-03-21T10:13:43.033Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 30,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fd046701410e585d29cb",
        "text": "2009 р",
        "html": "2009 р",
        "sent": "2017-03-21T10:14:28.617Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 30,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fd0e6d7eb18404ed83f5",
        "text": "> не вдається нормально запустити vagran up\n\nа просто virtualbox працює?",
        "html": "<blockquote>\n<p>не вдається нормально запустити vagran up</p></blockquote>\n<p>а просто virtualbox працює?</p>",
        "sent": "2017-03-21T10:14:38.413Z",
        "editedAt": "2017-03-21T10:14:43.565Z",
        "fromUser": {
            "id": "554fda4715522ed4b3e0319b",
            "username": "olessavluk",
            "displayName": "Oles Savluk",
            "url": "/olessavluk",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/olessavluk",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=128",
            "v": 7,
            "gv": "3"
        },
        "unread": false,
        "readBy": 30,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 2
    },
    {
        "id": "58d0fd17fe6a638b1ae9ea4d",
        "text": "працює",
        "html": "працює",
        "sent": "2017-03-21T10:14:47.693Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 30,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fd2db809ca5f4a67ed1a",
        "text": "значить проблема не з віртуалізацією, а з vagrant",
        "html": "значить проблема не з віртуалізацією, а з vagrant",
        "sent": "2017-03-21T10:15:08.998Z",
        "editedAt": "2017-03-21T10:15:15.561Z",
        "fromUser": {
            "id": "554fda4715522ed4b3e0319b",
            "username": "olessavluk",
            "displayName": "Oles Savluk",
            "url": "/olessavluk",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/olessavluk",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=128",
            "v": 7,
            "gv": "3"
        },
        "unread": false,
        "readBy": 30,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 2
    },
    {
        "id": "58d0fd54b809ca5f4a67ed9f",
        "text": "а що з ним можна зробити?",
        "html": "а що з ним можна зробити?",
        "sent": "2017-03-21T10:15:48.223Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fd67590d72c864ed4a6c",
        "text": "скопіювати помилку і загуглити ;)",
        "html": "скопіювати помилку і загуглити ;)",
        "sent": "2017-03-21T10:16:07.456Z",
        "fromUser": {
            "id": "554fda4715522ed4b3e0319b",
            "username": "olessavluk",
            "displayName": "Oles Savluk",
            "url": "/olessavluk",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/olessavluk",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=128",
            "v": 7,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fd766d7eb18404ed8675",
        "text": "@Olexander11 попробуй Homestead - это обертка над вагрантом... проще в конфигурировании - фактически все в одном YAML файле ",
        "html": "<span data-link-type=\"mention\" data-screen-name=\"Olexander11\" class=\"mention\">@Olexander11</span> попробуй Homestead - это обертка над вагрантом... проще в конфигурировании - фактически все в одном YAML файле ",
        "sent": "2017-03-21T10:16:22.064Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [
            {
                "screenName": "Olexander11",
                "userId": "58a5c994d73408ce4f4acf7f",
                "userIds": []
            }
        ],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fdb458ad4eb0283805e1",
        "text": "и да в Win7 нужно поставить последний .Net и https://www.microsoft.com/en-us/download/details.aspx?id=50395",
        "html": "и да в Win7 нужно поставить последний .Net и <a href=\"https://www.microsoft.com/en-us/download/details.aspx?id=50395\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://www.microsoft.com/en-us/download/details.aspx?id=50395</a>",
        "sent": "2017-03-21T10:17:24.651Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [
            {
                "url": "https://www.microsoft.com/en-us/download/details.aspx?id=50395"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fdc9590d72c864ed4bba",
        "text": "и обновить вот эту штуку",
        "html": "и обновить вот эту штуку",
        "sent": "2017-03-21T10:17:45.746Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fdce58ad4eb028380625",
        "text": "там при vagran up, воно запускається, але не логіниться в кінці",
        "html": "там при vagran up, воно запускається, але не логіниться в кінці",
        "sent": "2017-03-21T10:17:50.425Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fdd658ad4eb028380649",
        "text": "вот сделай что написал",
        "html": "вот сделай что написал",
        "sent": "2017-03-21T10:17:58.947Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fde5a84f611959c9664e",
        "text": "@demeshko дякую спробую",
        "html": "<span data-link-type=\"mention\" data-screen-name=\"demeshko\" class=\"mention\">@demeshko</span> дякую спробую",
        "sent": "2017-03-21T10:18:13.811Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [
            {
                "screenName": "demeshko",
                "userId": "561cb354d33f749381a92e6e",
                "userIds": []
            }
        ],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fdee2215a08f04ab4461",
        "text": "поставь последний .Net 4.5.2 и вот то по ссылке что дал",
        "html": "поставь последний .Net 4.5.2 и вот то по ссылке что дал",
        "sent": "2017-03-21T10:18:22.795Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fe086d7eb18404ed889d",
        "text": "> там при vagran up, воно запускається, але не логіниться в кінці\n\nвідкрий окрему консольку і напиши в ній `vagrant ssh`, по дефолту наче й не повинно логінитись",
        "html": "<blockquote>\n<p>там при vagran up, воно запускається, але не логіниться в кінці</p></blockquote>\n<p>відкрий окрему консольку і напиши в ній <code>vagrant ssh</code>, по дефолту наче й не повинно логінитись</p>",
        "sent": "2017-03-21T10:18:48.539Z",
        "fromUser": {
            "id": "554fda4715522ed4b3e0319b",
            "username": "olessavluk",
            "displayName": "Oles Savluk",
            "url": "/olessavluk",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/olessavluk",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/1577804?v=3&s=128",
            "v": 7,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fe462215a08f04ab4595",
        "text": "Windows Management Framework 5.0 includes updates to Windows PowerShell - вот что нужно для вагранта ",
        "html": "Windows Management Framework 5.0 includes updates to Windows PowerShell - вот что нужно для вагранта ",
        "sent": "2017-03-21T10:19:50.804Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d0fe587b3f37e7541c9632",
        "text": "на старой версии PowerShell не хочет конектится",
        "html": "на старой версии PowerShell не хочет конектится",
        "sent": "2017-03-21T10:20:08.041Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d10de9fe6a638b1aea3a7c",
        "text": "Хто знає де можна на халявку шрифтів накачати для ІДЕшок і редакторів?",
        "html": "Хто знає де можна на халявку шрифтів накачати для ІДЕшок і редакторів?",
        "sent": "2017-03-21T11:26:33.391Z",
        "fromUser": {
            "id": "56afb24ae610378809bf5994",
            "username": "lempiy",
            "displayName": "Anton Lempiy",
            "url": "/lempiy",
            "avatarUrl": "https://avatars-05.gitter.im/gh/uv/3/lempiy",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/15019353?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/15019353?v=3&s=128",
            "v": 8,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d12c006d7eb18404ee5ed6",
        "text": "поставив  Windows Management Framework 5.0 ..проблема з vagrant залишилась..",
        "html": "поставив  Windows Management Framework 5.0 ..проблема з vagrant залишилась..",
        "sent": "2017-03-21T13:34:56.383Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d12c77b809ca5f4a68c6a6",
        "text": "Timed out while waiting for the machine to boot. This means that\nVagrant was unable to communicate with the guest machine within\nthe configured (\"config.vm.boot_timeout\" value) time period.\n",
        "html": "Timed out while waiting for the machine to boot. This means that<br>Vagrant was unable to communicate with the guest machine within<br>the configured (&quot;config.vm.boot_timeout&quot; value) time period.",
        "sent": "2017-03-21T13:36:55.118Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d1342a6d7eb18404ee89ff",
        "text": "попробуй Homestead... это обертка над вагрантом ",
        "html": "попробуй Homestead... это обертка над вагрантом ",
        "sent": "2017-03-21T14:09:46.583Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d134538fa1633954ff5c14",
        "text": "@demeshko ок, зараз пошукаю :)",
        "html": "<span data-link-type=\"mention\" data-screen-name=\"demeshko\" class=\"mention\">@demeshko</span> ок, зараз пошукаю :)",
        "sent": "2017-03-21T14:10:27.169Z",
        "fromUser": {
            "id": "58a5c994d73408ce4f4acf7f",
            "username": "Olexander11",
            "displayName": "Olexander11",
            "url": "/Olexander11",
            "avatarUrl": "https://avatars-01.gitter.im/gh/uv/3/Olexander11",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/25788948?v=3&s=128",
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [
            {
                "screenName": "demeshko",
                "userId": "561cb354d33f749381a92e6e",
                "userIds": []
            }
        ],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d13464f7f7d481043dae2c",
        "text": "и готовый образ с множеством софта и предконфигрурированный",
        "html": "и готовый образ с множеством софта и предконфигрурированный",
        "sent": "2017-03-21T14:10:44.604Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 32,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d13466b809ca5f4a68ebbe",
        "text": "https://laravel.com/docs/5.4/homestead",
        "html": "<a href=\"https://laravel.com/docs/5.4/homestead\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://laravel.com/docs/5.4/homestead</a>",
        "sent": "2017-03-21T14:10:46.795Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 32,
        "urls": [
            {
                "url": "https://laravel.com/docs/5.4/homestead"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d13477fe6a638b1aeafb13",
        "text": "подходит как для PHP так JS разработки",
        "html": "подходит как для PHP так JS разработки",
        "sent": "2017-03-21T14:11:03.893Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 32,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d134956d7eb18404ee8c8f",
        "text": "Included Software\n\nUbuntu 16.04\nGit\nPHP 7.1\nNginx\nMySQL\nMariaDB\nSqlite3\nPostgres\nComposer\nNode (With Yarn, Bower, Grunt, and Gulp)\nRedis\nMemcached\nBeanstalkd\nMailhog\nngrok",
        "html": "<p>Included Software</p><p>Ubuntu 16.04<br>Git<br>PHP 7.1<br>Nginx<br>MySQL<br>MariaDB<br>Sqlite3<br>Postgres<br>Composer<br>Node (With Yarn, Bower, Grunt, and Gulp)<br>Redis<br>Memcached<br>Beanstalkd<br>Mailhog<br>ngrok</p>",
        "sent": "2017-03-21T14:11:33.028Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 33,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d1358b7b3f37e7541da859",
        "text": "по сути клонируешь с гита хомстед.. делаешь там Init, прописываешь конфиг нужный в homestead.yaml(папки проекта маппинг, создание бд и тд) и  потом делаешь vagrant up..  там уже nginx сконфигурирован - указать надо только мапинг папок и прописать в хостах себе адреса и да оно образ само скачает последний",
        "html": "по сути клонируешь с гита хомстед.. делаешь там Init, прописываешь конфиг нужный в homestead.yaml(папки проекта маппинг, создание бд и тд) и  потом делаешь vagrant up..  там уже nginx сконфигурирован - указать надо только мапинг папок и прописать в хостах себе адреса и да оно образ само скачает последний",
        "sent": "2017-03-21T14:15:39.175Z",
        "editedAt": "2017-03-21T14:17:14.514Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 34,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 2
    },
    {
        "id": "58d13593fe6a638b1aeb0083",
        "text": "ну или не пользоваться этим )))",
        "html": "ну или не пользоваться этим )))",
        "sent": "2017-03-21T14:15:47.816Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 34,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d1359b7b3f37e7541da8a8",
        "text": "просто как виртуальную машину",
        "html": "просто как виртуальную машину",
        "sent": "2017-03-21T14:15:55.872Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 35,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d3da00caf143ab66529d59",
        "text": "Шановні, кому цікаво про SPA поспілкуватися/послухати/розказати щось?",
        "html": "Шановні, кому цікаво про SPA поспілкуватися/послухати/розказати щось?",
        "sent": "2017-03-23T14:21:52.034Z",
        "fromUser": {
            "id": "572a1a80c43b8c60197121af",
            "username": "s0rr0w",
            "displayName": "s0rr0w",
            "url": "/s0rr0w",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/s0rr0w",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/3892455?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/3892455?v=3&s=128",
            "v": 6,
            "gv": "3"
        },
        "unread": false,
        "readBy": 33,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d3dba38fa16339540b4a32",
        "text": "@s0rr0w +",
        "html": "<span data-link-type=\"mention\" data-screen-name=\"s0rr0w\" class=\"mention\">@s0rr0w</span> +",
        "sent": "2017-03-23T14:28:51.714Z",
        "fromUser": {
            "id": "568e2fc816b6c7089cc183f6",
            "username": "zonzujiro",
            "displayName": "zonzujiro",
            "url": "/zonzujiro",
            "avatarUrl": "https://avatars-05.gitter.im/gh/uv/3/zonzujiro",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/2997359?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/2997359?v=3&s=128",
            "v": 12,
            "gv": "3"
        },
        "unread": false,
        "readBy": 33,
        "urls": [],
        "mentions": [
            {
                "screenName": "s0rr0w",
                "userId": "572a1a80c43b8c60197121af",
                "userIds": []
            }
        ],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d3dbcd6701410e5869c56a",
        "text": "@s0rr0w не хотите в одну из суббот выступить у нас?",
        "html": "<span data-link-type=\"mention\" data-screen-name=\"s0rr0w\" class=\"mention\">@s0rr0w</span> не хотите в одну из суббот выступить у нас?",
        "sent": "2017-03-23T14:29:33.600Z",
        "fromUser": {
            "id": "568e2fc816b6c7089cc183f6",
            "username": "zonzujiro",
            "displayName": "zonzujiro",
            "url": "/zonzujiro",
            "avatarUrl": "https://avatars-05.gitter.im/gh/uv/3/zonzujiro",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/2997359?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/2997359?v=3&s=128",
            "v": 12,
            "gv": "3"
        },
        "unread": false,
        "readBy": 33,
        "urls": [],
        "mentions": [
            {
                "screenName": "s0rr0w",
                "userId": "572a1a80c43b8c60197121af",
                "userIds": []
            }
        ],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d3de196701410e5869d29b",
        "text": "Та в принципі міжна, тільки треба розрахувати час.  Можна з 13:30 до 17:00 десь. ",
        "html": "Та в принципі міжна, тільки треба розрахувати час.  Можна з 13:30 до 17:00 десь. ",
        "sent": "2017-03-23T14:39:21.138Z",
        "fromUser": {
            "id": "572a1a80c43b8c60197121af",
            "username": "s0rr0w",
            "displayName": "s0rr0w",
            "url": "/s0rr0w",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/s0rr0w",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/3892455?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/3892455?v=3&s=128",
            "v": 6,
            "gv": "3"
        },
        "unread": false,
        "readBy": 33,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d3de9058ad4eb02844bf29",
        "text": "надо позвать нашего распорядителя",
        "html": "надо позвать нашего распорядителя",
        "sent": "2017-03-23T14:41:20.642Z",
        "fromUser": {
            "id": "568e2fc816b6c7089cc183f6",
            "username": "zonzujiro",
            "displayName": "zonzujiro",
            "url": "/zonzujiro",
            "avatarUrl": "https://avatars-05.gitter.im/gh/uv/3/zonzujiro",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/2997359?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/2997359?v=3&s=128",
            "v": 12,
            "gv": "3"
        },
        "unread": false,
        "readBy": 33,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d3de97b809ca5f4a74e3a0",
        "text": "кастую @AMashoshyna почитай плиз @s0rro0w ^",
        "html": "кастую <span data-link-type=\"mention\" data-screen-name=\"AMashoshyna\" class=\"mention\">@AMashoshyna</span> почитай плиз <span data-link-type=\"mention\" data-screen-name=\"s0rro0w\" class=\"mention\">@s0rro0w</span> ^",
        "sent": "2017-03-23T14:41:27.787Z",
        "editedAt": "2017-03-23T14:42:22.395Z",
        "fromUser": {
            "id": "568e2fc816b6c7089cc183f6",
            "username": "zonzujiro",
            "displayName": "zonzujiro",
            "url": "/zonzujiro",
            "avatarUrl": "https://avatars-05.gitter.im/gh/uv/3/zonzujiro",
            "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/2997359?v=3&s=60",
            "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/2997359?v=3&s=128",
            "v": 12,
            "gv": "3"
        },
        "unread": false,
        "readBy": 33,
        "urls": [],
        "mentions": [
            {
                "screenName": "AMashoshyna",
                "userId": "5825a31fd73408ce4f3526b6",
                "userIds": []
            },
            {
                "screenName": "s0rro0w",
                "userIds": []
            }
        ],
        "issues": [],
        "meta": [],
        "v": 2
    },
    {
        "id": "58d52fd719cdf803632c9f97",
        "text": "Чим більше я занурююся у XQuery, тим більше розумію, що він набагато зручніший та красивіший за JS. Справжнє функціональне програмування!",
        "html": "Чим більше я занурююся у XQuery, тим більше розумію, що він набагато зручніший та красивіший за JS. Справжнє функціональне програмування!",
        "sent": "2017-03-24T14:40:23.652Z",
        "fromUser": {
            "id": "572a1a80c43b8c60197121af",
            "username": "s0rr0w",
            "displayName": "s0rr0w",
            "url": "/s0rr0w",
            "avatarUrl": "https://avatars-04.gitter.im/gh/uv/3/s0rr0w",
            "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/3892455?v=3&s=60",
            "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/3892455?v=3&s=128",
            "v": 6,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 1
    },
    {
        "id": "58d53239d660bdf528c6dd48",
        "text": "https://blog.jetbrains.com/phpstorm/2017/03/new-in-phpstorm-2017-1-parameter-hints/   джва года ждал )) от это удобно оказалось - сегодня обновился и прям пишу и радуюсь... в документацию и по классам бегать дефиниции смотреть что и как  гораздо меньше надо...",
        "html": "<a href=\"https://blog.jetbrains.com/phpstorm/2017/03/new-in-phpstorm-2017-1-parameter-hints/\" rel=\"nofollow\" target=\"_blank\" class=\"link\">https://blog.jetbrains.com/phpstorm/2017/03/new-in-phpstorm-2017-1-parameter-hints/</a>   джва года ждал )) от это удобно оказалось - сегодня обновился и прям пишу и радуюсь... в документацию и по классам бегать дефиниции смотреть что и как  гораздо меньше надо...",
        "sent": "2017-03-24T14:50:33.722Z",
        "editedAt": "2017-03-24T14:53:45.739Z",
        "fromUser": {
            "id": "561cb354d33f749381a92e6e",
            "username": "demeshko",
            "displayName": "Viacheslav Demeshko",
            "url": "/demeshko",
            "avatarUrl": "https://avatars-03.gitter.im/gh/uv/3/demeshko",
            "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=60",
            "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/10223031?v=3&s=128",
            "v": 15,
            "gv": "3"
        },
        "unread": false,
        "readBy": 31,
        "urls": [
            {
                "url": "https://blog.jetbrains.com/phpstorm/2017/03/new-in-phpstorm-2017-1-parameter-hints/"
            }
        ],
        "mentions": [],
        "issues": [],
        "meta": [],
        "v": 3
    }
]




export default class ChatRoom extends Component{
    render =()=>{

        return (<div className="chat">
            {data.map(message=><ChatMessage  key={message.id} message={message}/>)}
        </div>)
    }
}
