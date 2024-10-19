<template>
  <aside>
    <div
      class="flex h-full w-full flex-col gap-5 overflow-y-auto rounded-md border bg-card pb-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
    >
      <SidebarItem :links="menu" />

      <div class="mt-auto">
        <SidebarItem :links="bottomMenu" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
  const bottomMenu = [
    {
      title: "Тохиргоо",
      icon: "heroicons:cog-8-tooth",
    },
    {
      title: "Тусламж",
      icon: "heroicons:question-mark-circle",
    },
    {
      title: "Гарах",
      icon: "heroicons:arrow-left-on-rectangle",
    },
  ];
  const menu = [
    {
      title: "Апп-ын мэдээлэлүүд",
      icon: "heroicons:home",
    },
 
    {
      title: "Танд ирсэн саналууд",
      icon: "heroicons:inbox-arrow-down-solid",
      items: [
        { title: "Бүгдийг харах" },
      
      ],
    },
    {
      title: "Тайлан, Мэдээнүүд",
      icon: "heroicons:cube",
      items: [
        { title: "Тайлан" },
        { title: "Мэдээнүүд" },
        
      ],
    },
    {
      title: "Хэрэглэгчид",
      icon: "heroicons:user",
      items: [
        { title: "Бүх хэрэглэгчид" },
        { title: "Шинэ хэрэглэгч нэмэх" },
        { title: "Хэрэглэгчийн мэдээлэл засах" },
        { title: "Хэрэглэгч хасах" },
       
      ],
    },
    {
      title: "Борлуулалтын бүс",
      icon: "heroicons:chart-pie",
      items: [{ title: "Топ 10" }, { title: "Байршилаар" }, ],
    },
  ];
</script>
