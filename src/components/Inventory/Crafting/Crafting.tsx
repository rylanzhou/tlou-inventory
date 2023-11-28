import Action from './Action';
import Material from './Material';
import Text from './Text';
import Craft from './Tools';

export default function Crafting() {
  return (
    <div className="Crafting">
      <Text />
      <hr />
      <Material />
      <hr />
      <Craft />
      <hr />
      <Action />
    </div>
  );
}
