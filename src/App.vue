<template>
  <AppWrapper>
    <div class="text-xl font-semibold">My Interests</div>
    <InfoCard
      v-for="info in infos"
      :info="info"
      :key="info.id"
      v-on:update-content="updateContent"
    />
    <ErrorMessage v-show="formError" />
    <div class="w-full flex justify-end mt-4">
      <UpdateButton :loading="loading" :submit="submitData" />
    </div>
  </AppWrapper>
</template>

<script>
import InfoCard from "./components/InfoCard";
import UpdateButton from "./components/UpdateButton";
import AppWrapper from "./components/AppWrapper";
import ErrorMessage from "./components/ErrorMessage";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "App",
  components: { InfoCard, UpdateButton, AppWrapper, ErrorMessage },
  methods: {
    updateContent({ name, content }) {
      this.formError = false;
      this.infos = this.infos.map((i) => {
        if (i.name === name) {
          i.content = content;
        }
        return i;
      });
    },
    submitData() {
      this.loading = true;
      if (!this.formValidate()) {
        this.formError = true;
        setTimeout(() => {
          this.formError = false;
        }, 1800);
        this.loading = false;
      }
      return new Promise((res) => {
        setTimeout(() => {
          res("hello from futrue");
          this.loading = false;
        }, 1200);
      })
        .then(() => {
          // handle response
        })
        .catch(() => {
          // handle err
        });
    },
    formValidate() {
      return this.infos.every(
        (info) => info.content.length && info.content.length > 5
      );
    },
  },
  data() {
    return {
      loading: false,
      infos: ["Full name", "Favorite movie", "Favorite book"].map((i) => {
        return {
          id: uuidv4(),
          name: i,
          content: "something here",
        };
      }),
      formError: false,
    };
  },
};
</script>
