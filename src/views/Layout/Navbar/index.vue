<template>
  <div class="app-nav">
    <div
      v-class:box-shadow="isMenuActive"
      class="container is-flex is-vcentered"
    >
      <Logo />
      <div class="is-flex-auto"></div>
      <NavItems :menus="menus" />
      <div
        class="nav-item is-hidden-desktop"
        style="margin-top: 0.5rem"
      >
        <a
          class="icon is-medium"
          @click="isMenuActive = !isMenuActive"
        >
          <i class="iconfont icon-menu"></i>
        </a>
      </div>

      <div class="nav-item" style="margin-left: 0; margin-top: 0.5rem">
        <a
          v-if="isZhCN"
          @click="changeLang"
          class="icon"
        >
          <i
            class="iconfont icon-en-US"
            style="font-size: 1.75rem"
          ></i>
        </a>
        <a
          v-else
          @click="changeLang"
          class="icon"
        >
          <i
            class="iconfont icon-zh-CN"
            style="font-size: 1.75rem"
          ></i>
        </a>
      </div>
    </div>
    <div
      v-show="isMenuActive"
      class="nav-menu is-hidden-desktop is-unselectable"
    >
      <div v-show="isMenuActive" class="menu-shadow"></div>
      <NavMenu
        :menus="menus"
        @click-item="isMenuActive = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  isZhCN, locale, enUS, zhCN
} from "@/plugins/i18n";
import Logo from "./Logo.vue";
import NavMenu from "./NavMenu.vue";
import NavItems from "./NavItems.vue";

interface Menu {
  text: string;
  route?: string;
  link?: string;
  children?: Menu[];
}

const menus: Menu[] = [
  { text: "home", route: "/home" },
  {
    text: "products",
    children: [
      { text: "hoisters", route: "/products/hoisters" },
      { text: "asrs", route: "/products/asrs" },
      { text: "rgv", route: "/products/rgv" },
      { text: "agv", route: "/products/agv" },
      { text: "palletizing-robot", route: "/products/palletizing-robot" },
    ]
  },
  {
    text: "news",
    children: [
      {
        text: "frontier",
        link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI0NzIxMTgyMA==&action=getalbum&album_id=1346581013702705154&scene=173&from_msgid=2247484657&from_itemidx=1&count=3#wechat_redirect",
      },
    ]
  },
  { text: "service", route: "/service" },
  { text: "about", route: "/about" },
  { text: "contact", route: "/contacts" },
];

function handleMenusLang (menuList: Menu[], lang: string, $t: any): Menu[] {
  return menuList.map(menu => ({
    text: $t(menu.text),
    route: `/${lang}${menu.route}`,
    link: menu.link,
    children: menu.children && handleMenusLang(menu.children, lang, $t)
  }) as Menu);
}

export default defineComponent({
  name: "Level",

  components: {
    Logo,
    NavMenu,
    NavItems
  },

  data: () => ({
    isMenuActive: false,
  }),

  computed: {
    isZhCN,

    menus (): Menu[] {
      return handleMenusLang(menus, locale(), this.$t);
    }
  },

  methods: {
    changeLang () {
      const route = {
        name: this.$router.currentRoute.value.name,
        params: { ...this.$router.currentRoute.value.params }
      };

      route.params.lang = this.isZhCN ? enUS : zhCN;
      this.$router.push(route as any);
    }
  },

  i18n: {
    messages: {
      [zhCN]: {
        home: "首页",
        products: "产品介绍",
        hoisters: "垂直物流输送系统",
        asrs: "自动化立体仓库",
        rgv: "RGV 有轨穿梭车",
        agv: "AGV 无人搬运车",
        "palletizing-robot": "码垛机器人",
        news: "企业资讯",
        frontier: "科技前沿",
        service: "客户服务",
        about: "公司介绍",
        contact: "联系我们"
      },
      [enUS]: {
        home: "Home",
        products: "Product",
        hoisters: "Vertical Conveyor",
        asrs: "ASRS",
        rgv: "RGV",
        agv: "AGV",
        "palletizing-robot": "Palletizing robot",
        news: "News",
        frontier: "Technology Frontier",
        service: "Service",
        about: "About",
        contact: "Contact"
      }
    }
  },
});
</script>
