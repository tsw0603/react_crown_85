### 0. 心得甘苦談

---

### 1. (local) 請以 App_xx.js 顯示下圖片，繳交

Chrome 截圖
![](https://i.imgur.com/pcHOBnR.jpg)

目錄結構及 App_xx 部分內容截圖 (以學號後 2 碼來展開 category 內容，其他收起)
![](https://i.imgur.com/N9TqbZt.png)

App_85.js code (程式碼，非圖片 )

```
function App_85() {
  return (
    <div class="homepage">
      <div class="directory-menu">
        <div class="menu-item">
          <img class="background-image" src="https://i.ibb.co/cvpntL1/hats.png" alt="" />
          <a href="./hats.html" class="content">
            <h1 class="title">HATS</h1>
            <span class="subtitle">SHOP NOW</span>
          </a>
        </div>

        <div class="menu-item">
          <img class="background-image" src="https://i.ibb.co/px2tCc3/jackets.png" alt="" />
          <a href="./jackets.html" class="content">
            <h1 class="title">JACKETS</h1>
            <span class="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div class="menu-item">
          <img class="background-image" src="https://i.ibb.co/0jqHpnp/sneakers.png" alt="" />
          <a href="./sneakers.html" class="content">
            <h1 class="title">SNEAKERS</h1>
            <span class="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div class="large menu-item">
          <img class="background-image" src="https://i.ibb.co/GCCdy8t/womens.png" alt="" />
          <a href="./womens.html" class="content">
            <h1 class="title">WOMENS</h1>
            <span class="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div class="large menu-item">
          <img class="background-image" src="https://i.ibb.co/R70vBrQ/men.png" alt="" />
          <a href="./mens.html" class="content">
            <h1 class="title">MENS</h1>
            <span class="subtitle">SHOP NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}

```

---

### 2. (local) 將 homepage 分成如下圖的 components，Homepage_xx.js, Direcory_xx.js, MenuItem_xx.js，並且能夠正常顯示如第 1 題。繳交

Chrome 截圖
![](https://i.imgur.com/pcHOBnR.jpg)

目錄結構，要含所有用到的 components
![](https://i.imgur.com/jsvXqVF.png)

Homepage_85.js code (程式碼，非圖片 )

```
import React from "react";
import Directory_85 from "../components/Directory_85";
import './Homepage_85.scss';

const Homepage_85 = () => {
    return (
        <div class="homepage">
            <Directory_85 />
        </div>
    );
};

export default Homepage_85;
```

Directory_85.js code

```
import React from "react";
import './Directory_85.scss';
import MenuItem_85 from "./MenuItem_85";

const Directory_85 = () => {
    return (
        <div>
            <div class="directory-menu">
                <MenuItem_85
                    name='HATS'
                    remoteUrl='https://i.ibb.co/cvpntL1/hats.png'
                    size=''
                />
                <MenuItem_85
                    name='JACKETS'
                    remoteUrl='https://i.ibb.co/px2tCc3/jackets.png'
                    size=''
                />
                <MenuItem_85
                    name='SNEAKERS'
                    remoteUrl='https://i.ibb.co/0jqHpnp/sneakers.png'
                    size=''
                />
                <MenuItem_85
                    name='WOMENS'
                    remoteUrl='https://i.ibb.co/GCCdy8t/womens.png'
                    size=''
                />
                <MenuItem_85
                    name='MENS'
                    remoteUrl='https://i.ibb.co/R70vBrQ/men.png'
                    size=''
                />
            </div>
        </div>
    );
};

export default Directory_85;
```

MenuItem_85.js code

```
import React from "react";
import './MenuItem_85.scss';

const MenuItem_85 = ({ name, remoteUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <img className="background-image" src={remoteUrl} alt="" />
            <a href="./hats.html" className="content">
                <h1 className="title">{name}</h1>
                <span className="subtitle">SHOP NOW</span>
            </a>
        </div>
    )
}

export default MenuItem_85;
```

---

### 3. (local) 將 menu items 五筆資料放入 JSON 陣列中，並能正常顯示如第 1 題。繳交

Chrome 截圖
![](https://i.imgur.com/xDeI9HK.jpg)

JSON 陣列 (程式碼，非圖片 )

```
const items = [
    {
        id: 1,
        name: 'HATS',
        remoteUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: '',
    },
    {
        id: 2,
        name: 'JACKETS',
        remoteUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: '',
    },
    {
        id: 3,
        name: 'SNEAKERS',
        remoteUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: '',
    },
    {
        id: 4,
        name: 'WOMENS',
        remoteUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
    },
    {
        id: 5,
        name: 'MENS',
        remoteUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
    },
]

export default items;

```

Directory_xx.js code (程式碼，非圖片 )

```
import React, { useState } from "react";
import './Directory_85.scss';
import items from "./menu-items-data";
import MenuItem_85 from "./MenuItem_85";

const Directory_85 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div>
            <div className='directory-menu'>
                {menuItems.map((item) => {
                    const { id, name, remoteUrl, size } = item;
                    return (
                        <MenuItem_85
                            id={id}
                            name={name}
                            remoteUrl={remoteUrl}
                            size={size}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Directory_85;
```

### 4. (local, github) 實作路由 /shop_xx，可以顯示 overview.html 內兩種 category 的資訊 (c1, c2)，每一 category 要顯示 4 筆資料。c1, c2 由學號後兩碼來決定，顯示順序先 c1 再 c2，說明如下：

說明 c1, c2 那是坐那兩個
8, 5--sneakers, mens

local 端 Chrome 執行結果截圖
![](https://i.imgur.com/wwBe41a.jpg)

Github page 執行結果截圖
![]()

重要相關的原始程式碼
ShopPage_85.js

```
import React, { useState } from 'react';
import Overview_85 from '../components/Overview_85';

import './ShopPage_85.scss';

const Shop_85 = () => {
  return (
    <div className="shop-page">
      <Overview_85 />
    </div>
  );
};

export default Shop_85;
```

Overview_85.js

```
import React, { useState } from 'react';
import './Overview_85.scss';
import mens from './mens-data';
import sneakers from './sneakers-data';
import Preview_85 from './Preview_85';

const Overview_85 = () => {
  const [mensItems, setMensItems] = useState(mens);
  console.log('mensItems', mensItems);
  const [sneakersItems, setSneakersItems] = useState(sneakers);
  console.log('sneakersItems', sneakersItems);
  return (
    <div>
      <div className="collection-overview">
        <div className="collection-preview">
          <h2 className="title">SNEAKERS</h2>
          <div className="preview">
            {sneakersItems.map((sneakers) => {
              const { id, name, remoteUrl, price } = sneakers;

              return (
                <Preview_85
                  key={id}
                  name={name}
                  remoteUrl={remoteUrl}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="collection-overview">
        <div className="collection-preview">
          <h2 className="title">MENS</h2>
          <div className="preview">
            {mensItems.map((mens) => {
              const { id, name, remoteUrl, price } = mens;

              return (
                <Preview_85
                  key={id}
                  name={name}
                  remoteUrl={remoteUrl}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview_85;
```

Preview_85.js

```
import React from "react";
import './Preview_85.scss';

const preview_85 = ({ name, remoteUrl, price }) => {
    return (

                <div className="collection-item">
                    <img className="image" src={remoteUrl} />
                    <div className="collection-footer">
                        <span className="name">{name}</span>
                        <span className="price">{price}</span>
                    </div>
                    <button className="custom-button">Add to Cart</button>
                </div>
    );
};

export default preview_85;
```

mens-data.js

```
const mens = [
    {
        id: 1,
        title: 'MENS',
        name: 'Jean Long Sleeve',
        remoteUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: '40',
    },
    {
        id: 2,
        title: 'MENS',
        name: 'Burgundy T-shirt',
        remoteUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: '25',
    },
    {
        id: 3,
        title: 'MENS',
        name: 'Black & White Longsleeve',
        remoteUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: '25',
    },
    {
        id: 4,
        title: 'MENS',
        name: 'Camo Down Vest',
        remoteUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: '325',
    },
];

export default mens;
```

sneakers-data.js

```
const sneakers = [
    {
        id: 1,
        title: 'SNEAKERS',
        name: 'Timberlands',
        remoteUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: '200',
    },
    {
        id: 2,
        title: 'SNEAKERS',
        name: 'Wolf Cap',
        remoteUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: '14',
    },
    {
        id: 3,
        title: 'SNEAKERS',
        name: 'Black Converse',
        remoteUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: '110',
    },
    {
        id: 4,
        title: 'SNEAKERS',
        name: 'Nike White AirForce',
        remoteUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: '160',
    },
];

export default sneakers;
```

---

### 5. 將目前所完成的 React code 放入 Github 中，建立的 repository 要顯示 id 資訊。要繳交

repository URL 及截圖，可以看到你的原始程式碼，
![]()

Github page 設定之截圖
![]()

Github page URL 及截圖，可以執行 React 程式
![]()

---

### 6. (local) 加入 header，能顯示 logo 及選單，-- 點選 logo，會回到主頁 (路由 /)

-- 點選 Shop，會到 Shop Overview Page (路由 /shop_xx)，要能顯示上面第 4 題的內容
![](https://i.imgur.com/wwBe41a.jpg)
-- 點選 Contact，會到 Contact Page (路由 /contact_xx)
![](https://i.imgur.com/EbOvu92.png)
-- 點選 Signin，會到 Signin Page (路由 /signin_xx)
![](https://i.imgur.com/7TzLjU0.png)

---
