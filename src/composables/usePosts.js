import { ref } from "vue";
import axios from "@/plugins/axios.js";
import { useRouter, useRoute } from "vue-router";

export const usePosts = () => {
  const route = useRoute();
  const router = useRouter();
  const page = ref(route.query.page || 1);
  const results = ref({});
  const detail = ref({});
  const comments = ref({});
  const loading = ref(false);
  const limit = ref(10)

  const startIndex = ref()
  const endIndex = ref()

  function fetchPosts() {
    page.value = route.query.page || 1

    startIndex.value = (page.value - 1) * limit.value;
    endIndex.value = startIndex.value + limit.value;

    loading.value = true;

    router.push({ query: { page: page.value } })

    return axios
      .get(`/posts`)
      .then((res) => {
        results.value = res?.data.slice(startIndex.value, endIndex.value) || {};
        loading.value = false;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  function fetchPostById(id) {
    loading.value = true;
    return axios
      .get(`/posts/${id || route.params.id}`)
      .then((res) => {
        detail.value = res?.data || {};
        loading.value = false;
      })
      .finally(() => {
        loading.value = false;
      });
  }
  function fetchPostComments(id) {
    loading.value = true;
    return axios
      .get(`/posts/${id || route.params.id}/comments`)
      .then((res) => {
        comments.value = res?.data || {};
        loading.value = false;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  return {
    results,
    detail,
    comments,
    loading,
    router,
    route,
    fetchPosts,
    fetchPostById,
    fetchPostComments,
  };
};