<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  router.go('/en/')
})
</script>

# Redirecting...

If you are not redirected automatically, [click here](/en/).
