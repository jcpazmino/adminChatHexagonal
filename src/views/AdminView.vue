<template>
  <div>
    <MetricsDashboard />
    <ConversationList />
  </div>
</template>
<script>
import MetricsDashboard from '../components/MetricsDashboard.vue';
import ConversationList from '../components/ConversationList.vue';
export default {
  name: 'AdminView',
  components: { MetricsDashboard, ConversationList }
}
</script>
