<template>
  <div class="header">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: table;
  height: 3rem;
  width: 100%;
  background-color: var(--color-border);
  padding-left: 1rem;
}

.content {
  display: table-cell;
  vertical-align: middle;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}
</style>
