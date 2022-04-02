import { mount } from "@vue/test-utils";
import InfoCard from "@/components/InfoCard.vue";

describe("InfoCard.vue", () => {
  const info = { name: "somename", content: "somecontent" };
  it("renders info.name, info.content when passed", () => {
    const wrapper = mount(InfoCard, {
      props: { info },
    });
    const cardName = wrapper.get('[data-test="info-card-name"]');
    const cardContent = wrapper.get('[data-test="info-card-content"]');
    expect(cardName.text()).toBe(info.name);
    expect(cardContent.text()).toBe(info.content);
  });
  it("render editing field when isEditing is true", () => {
    const wrapper = mount(InfoCard, {
      props: { info },
      data() {
        return { isEditing: true };
      },
    });
    expect(wrapper.find("#editBtn").exists()).toBeTruthy();
    expect(wrapper.find("#input").exists()).toBeTruthy();
  });
});
