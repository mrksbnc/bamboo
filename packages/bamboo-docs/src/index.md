<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // Redirect to /en/ on mount
  if (typeof window !== 'undefined') {
    window.location.href = '/en/'
  }
})
</script>

# Redirecting...

If you are not redirected automatically, [click here](/en/).
