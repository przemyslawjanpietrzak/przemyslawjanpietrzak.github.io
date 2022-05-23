<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("module1", ["actionA1"]),
    method() {
      const actionResult = this.actionA1();
    },
  },
};
</script>
