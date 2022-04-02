<template>
  <div class="flex flex-col w-full border-b-2 py-4">
    <div class="flex justify-between">
      <div data-test="info-card-name">{{ info.name }}</div>
      <button @click="toggleEdit()" id="editBtn">
        {{ isEditing ? "x" : "Edit" }}
      </button>
    </div>
    <div v-if="isEditing">
      <input
        class="w-11/12 pl-6 my-2 border-black border-2"
        v-model="content"
        data-test="input"
        id="input"
      />
    </div>
    <div v-else>
      <div class="w-11/12 my-2" data-test="info-card-content">
        {{ info.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "update-content"],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
  },
  computed: {
    content: {
      set(newValue) {
        this.$formError = false;
        this.$emit("update-content", {
          name: this.info.name,
          content: newValue,
        });
      },
      get() {
        return this.info.content;
      },
    },
  },
};
</script>
