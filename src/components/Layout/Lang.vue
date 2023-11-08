<script>
import {defineComponent,ref,onBeforeMount,watch} from 'vue'
import {useI18n} from "vue-i18n";
import {useStore} from "vuex";

export default defineComponent({
 /* data() {
    return {
      selectedLanguage: "en", // 默认选中的语言
      languages: {
        en: "English",
        vi: "Tiếng Việt",
        th: "อักษรไทย",
        id: "Indonesia",
        cn: "中文",
      },
      isUlActive: false, // 控制ul的class
    };
  },*/
  /*methods: {
    changeLanguage(lang) {
      this.selectedLanguage = lang; // 更新选中的语言
      this.$i18n.locale = lang; // 切换语言
      localStorage.setItem("selectedLanguage", lang); // 保存选中的语言到本地存储
      this.isUlActive = !this.isUlActive; // 点击时切换ul的class
    },
    loadLanguage() {
      const selectedLanguage = localStorage.getItem("selectedLanguage");
      if (selectedLanguage) {
        this.selectedLanguage = selectedLanguage;
        this.$i18n.locale = selectedLanguage;
      }
    },
  },*/
  setup() {
    const {locale} = useI18n()
    const isUlActive=ref(false)
    const store=useStore()
    const languages={
      en: "English",
      vi: "Tiếng Việt",
      th: "อักษรไทย",
      id: "Indonesia",
      cn: "中文",
    }
    const selectedLanguage=ref("en")
    const changeLanguage = (lang) => {
      selectedLanguage.value = lang; // 更新选中的语言
      locale.value = lang; // 切换语言
      localStorage.setItem("selectedLanguage", lang); // 保存选中的语言到本地存储
      isUlActive.value = !isUlActive.value; // 点击时切换ul的class
    }
    watch(()=>locale.value,(n,i)=>{
      store.commit('lang/changeStr',n)
    })
    const loadLanguage = () => {
      const getLanguage = localStorage.getItem("selectedLanguage");
      if (selectedLanguage) {
        selectedLanguage.value = getLanguage;
        locale.value = getLanguage;
      }
    }
    onBeforeMount(()=>{
      loadLanguage()
    })
    return {
      selectedLanguage,isUlActive,languages,
      changeLanguage, loadLanguage
    }
  },
})
</script>

<template>
  <div class="lang_select">
    <ul id="lang_select" :class="{ active: isUlActive }">
      <li
          v-for="langKey in Object.keys(languages)"
          :class="[langKey, { active: selectedLanguage === langKey }]"
          :key="langKey"
          @click="changeLanguage(langKey)"
      >
        <span> {{ languages[langKey] }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">

</style>