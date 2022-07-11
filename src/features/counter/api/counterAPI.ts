// A mock function to mimic making an async request for data
type DataType = { data: number };

export function fetchCount(amount = 1) {
  return new Promise<DataType>((resolve) => {
    setTimeout(() => {
      resolve({ data: amount });
    }, 5000);
  });
}
