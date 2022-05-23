<script>
import { mapMutations, mapGetters, mapState } from "vuex";

export default {
  methods: {
    ...mapMuttions("module1", ["increment"]),
    ...mapGetters("module1", ["valueFroGetter"]),
    ...mapState("module1", ["valueFromState"]),
    method() {
      this.increment(this.valueFroGetter, this.valueFromState);
    },
  },
};
</script>
