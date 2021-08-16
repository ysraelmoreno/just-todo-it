interface IOptions {
  value: string;
  label: string;
  selected: boolean;
}
const options: IOptions[] = [
  {
    label: "🖥 Programming",
    value: "programming",
    selected: true,
  },
  {
    label: "🖱 Testing",
    value: "testing",
    selected: false,
  },
  {
    label: "🧑‍💼 Work",
    value: "work",
    selected: false,
  },
];

export default options;
