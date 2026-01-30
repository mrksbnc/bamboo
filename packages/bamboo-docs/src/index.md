<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  if (typeof window !== 'undefined') {
    const availableLocales = ['en'];


    const userLocale = window.navigator.language || window.navigator.userLanguage

    if (availableLocales.includes(userLocale)) {
      router.push(`/${userLocale}/`);
      return;
    }

    window.location.href = '/en/';
  }
})
</script>

# Redirecting...

If you are not redirected automatically, [click here](/en/).
