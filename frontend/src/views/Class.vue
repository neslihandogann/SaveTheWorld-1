<template>
  <CustomHeader />
  <div class="container w-full h-full flex p-8 mt-16">
    <div class="content relative rounded-md w-7/12">
      <img
        class="object-cover w-full shadow-xl rounded-xl"
        src="https://images.unsplash.com/photo-1470520518831-10005602ab67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80"
        alt=""
      />
      <img
        class="
          absolute
          w-24
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
        "
        src="@/assets/play.svg"
        alt=""
      />
    </div>
    <div class="container p-4 w-3/12">
      <ul
        class="
          w-60
          text-sm
          font-medium
          text-gray-900
          bg-white
          rounded-lg
          border border-gray-200
          dark:bg-gray-700 dark:border-gray-600 dark:text-white
        "
      >
        <li
          class="
            py-2
            px-4
            w-full
            bg-green-300
            rounded-t-lg
            border-b border-gray-200
            dark:border-gray-600
          "
        >
          <h1>Ders Kategori 1</h1>
          <h1>Ders Kategori 1 icin aciklama</h1>
        </li>
        <li
          class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
        >
          <h1>Ders Kategori 2</h1>
          <h1>Ders Kategori 2 icin aciklama</h1>
        </li>
        <li
          class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
        >
          <h1>Ders Kategori 3</h1>
          <h1>Ders Kategori 3 icin aciklama</h1>
        </li>
        <li class="py-2 px-4 w-full rounded-b-lg">
          <h1>Ders Kategori 4</h1>
          <h1>Ders Kategori 4 icin aciklama</h1>
        </li>
      </ul>
    </div>
    <div class="container p-4 w-2/12">
      <ul
        class="
          w-60
          text-sm
          font-medium
          text-gray-900
          bg-white
          rounded-lg
          border border-gray-200
          dark:bg-gray-700 dark:border-gray-600 dark:text-white
        "
      >
        <li
          class="
            py-2
            px-4
            w-full
            rounded-t-lg
            border-b border-gray-200
            dark:border-gray-600
          "
        >
          <h1>Ders 1</h1>
          <h1>Ders 1 icin aciklama</h1>
        </li>
        <li
          class="
            py-2
            px-4
            w-full
            border-b
            bg-green-300
            border-gray-200
            dark:border-gray-600
          "
        >
          <h1>Ders 2</h1>
          <h1>Ders 2 icin aciklama</h1>
        </li>
        <li
          class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
        >
          <h1>Ders 3</h1>
          <h1>Ders 3 icin aciklama</h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

