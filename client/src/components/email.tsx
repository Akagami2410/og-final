import { Button } from "@react-email/components";

export function Email(props) {
  const { url } = props;

  return (
      <Button href={url}>Click me</Button>
  );
}