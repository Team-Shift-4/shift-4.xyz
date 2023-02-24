<template>
    <div>
        Portfolio
        <Flicking :options="{ align: 'prev', circular: true }" @move-end="onMoveEnd">
            <div class="panel">1</div>
            <div class="panel">2</div>
            <div class="panel">3</div>
        </Flicking>
    </div>
</template>
  
<script>
import { Flicking } from '@egjs/vue-flicking'
export default {
    name: 'PortfolioPage',
    components: {
        Flicking: Flicking
    }
}
</script>
<style>
@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");
*{
    padding: 0;
    margin: 0;
}

</style>