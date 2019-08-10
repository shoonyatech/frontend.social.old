<template>
  <!-- div for searching city -->
  <div class="thumbnail">
    <img class="photo" src="/images/city-thumb.jpg" />
    <div class="details">
      <div>{{ city.name }}, {{ city.country }}</div>
      <div class="text-sm">
        <span class="left half-width">{{ city.devCount }} devs</span
        ><span class="half-width">{{ city.designersCount }} designers</span>
      </div>
      <div class="text-xs tiny-details">
        <tiny-key-value
          label="React"
          value="60"
          class="half-width pr-2"
        ></tiny-key-value
        ><tiny-key-value
          label="Web"
          value="60"
          class="half-width"
        ></tiny-key-value>
      </div>
      <div class="text-xs tiny-details">
        <tiny-key-value
          label="Angular"
          value="160"
          class="half-width pr-2"
        ></tiny-key-value
        ><tiny-key-value
          label="Android"
          value="260"
          class="half-width"
        ></tiny-key-value>
      </div>
      <div class="text-xs tiny-details">
        <tiny-key-value
          label="Vue"
          value="6000"
          class="half-width pr-2"
        ></tiny-key-value
        ><tiny-key-value
          label="iOS"
          value="1060"
          class="half-width"
        ></tiny-key-value>
      </div>
      <div class="text-xs">ReactFoo 2019, JSFoo 2019</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import CitysearchDevcount from '@/components/CitysearchDevcount';
import CitysearchDevdisp from '@/components/CitysearchDevdisp';
import citysearchDevpics from '@/components/citysearchDevpics';
import TinyKeyValue from '@/components/TinyKeyValue';

export default {
  props: {
    city: { type: Object, required: true },
  },

  components: {
    TinyKeyValue,
  },

  methods: {},
};
</script>

<style scoped>
/* style for city thumbnail */
.thumbnail {
  border: solid #aada18 2px;
  height: 12rem;
  width: 12rem;
  min-width: 12rem;
}

.thumbnail .photo {
  background-color: #aada18;
  height: 5rem;
  width: 100%;
}

.details {
  padding: 0.5rem;
  text-align: left;
}

.half-width {
  width: 50%;
}

.pr-2 {
  padding-right: 10px;
}
</style>
