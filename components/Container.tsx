import { IContainer } from "@/typings/container.types";

const Container = ({ styles, children }: IContainer) => {
  return (
    <div className="container">
      {styles ? <div className={styles}>{children}</div> : children}
    </div>
  );
};

export default Container;
