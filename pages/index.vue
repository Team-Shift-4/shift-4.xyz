<template>
  <div>
    <div class="logo_big">
      <div class="logo_stack" stype="--stacks: 3;">
        <span style="--index: 0;">shift 4</span>
        <span style="--index: 1;">shift 4</span>
        <span style="--index: 2;">shift 4</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'barcode';
  src: url('@/static/LibreBarcode39Text-Regular.ttf');
}
.logo_big{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo_stack{
  display: grid;
  grid-template-columns: 1fr;
}
.logo_stack span{
  font-family: 'barcode';
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 10rem;
  --stack-height: calc(100% / var(--stacks) - 1px);
  --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(var(--index) * 120ms), glitch 2s ease infinite 2s alternate-reverse;
}
.logo_stack span:nth-child(odd) {--glitch-translate: 8px;}
.logo_stack span:nth-child(even) {--glitch-translate: -8px;}
@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 red, 2px -3px 0 skyblue;
    
  };
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 red, -2px 3px 0 skyblue;
  }
  100% {
    text-shadow: none;
  }
}
@keyframes glitch {
  0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 skyblue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 skyblue;
  }
  4%, 100% {  text-shadow: none; transform: none; }
}
</style>