export const contexts = [
  {
    icon: "box", // コンテキストの種類をよく表しているアイコンを選択
    title: "Themes", // コンテキスト名（ユニーク）
    components: [
      // ストーリーをラップするコンポーネントを列挙
      // <ThemeProvider /> など
    ],
    params: [
      // コンポーネントに注入するパラメータの配列
      { name: "Light Theme", props: { baseColor: "#fff" } },
      { name: "Dark Theme", props: { baseColor: "#333" }, default: true },
    ],
    // 設定値（詳細は https://www.npmjs.com/package/@storybook/addon-contexts#options
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },

  // さらに複数のコンテキストが設定可能！
];
