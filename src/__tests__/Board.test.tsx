import { render } from "@testing-library/react";

import { Board } from "../Board";

it("renders empty", () => {
  const { container } = render(<Board width={10} height={10} />);
  expect(container).toMatchSnapshot();
});
