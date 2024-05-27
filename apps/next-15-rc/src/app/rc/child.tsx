interface ChildProps {
  count?: number;
}

export default function Child({ count }: ChildProps) {
  console.log("rc test");

  return <div>Child</div>;
}
