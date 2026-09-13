<script setup>
import { onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'

const router = useRouter()

onMounted(() => {
  router.go(withBase('/en/'))
})
</script>

# Redirecting...

If you are not redirected automatically, [click here](./en/).
