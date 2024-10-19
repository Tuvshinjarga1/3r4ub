<template>
  <section class="mt-5">
    <p class="font-bold">Шинэ хэрэглэгчид</p>
    <div
      class="mt-5 flex w-full items-start gap-6 overflow-x-auto rounded-lg border bg-background px-5 py-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
    >
      <div class="flex shrink-0 flex-col items-center gap-2">
        <button class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Icon name="heroicons:plus" class="h-5 w-5" />
        </button>
        <div>
          <p class="text-sm font-semibold">Нэмэх</p>
        </div>
      </div>
      <template v-for="user in users" :key="user.id">
        <div class="flex shrink-0 flex-col items-center gap-2">
          <img
            class="h-10 w-10 rounded-full object-cover"
            :src="user.picture"
            :alt="user.firstName"
          />
          <div class="text-center">
            <p class="text-sm font-semibold">{{ user.firstName }} {{ user.lastName }}</p>
            <p class="text-xs text-muted-foreground">10 mins ago</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  import userImage1 from '@/assets/1.jpg';
  import userImage2 from '@/assets/Suvdaa.jpg';
  import userImage3 from '@/assets/tulgaa.jpg';
  import userImage4 from '@/assets/naraa.jpg';
  import userImage5 from '@/assets/ODKO.jpg';
  const users = [
    {
      id: 1,
      firstName: "Бат",
      lastName: "Эрдэнэ",
      picture: userImage1,
    },
    {
      id: 2,
      firstName: "Сувд",
      lastName: "Саруул",
      picture: userImage2,
    },
    {
      id: 3,
      firstName: "Мөнх",
      lastName: "Тулга",
      picture: userImage3,
    },
    {
      id: 4,
      firstName: "Наран",
      lastName: "Гэрэл",
      picture: userImage4,
    },
    {
      id: 5,
      firstName: "Соёмбо",
      lastName: "Од",
      picture: userImage5,
    },
  ];
</script>
