import { DuckFeedFeatureConfig } from '../../types/types';
import DuckFeedFields from '../DuckFeedFields/DuckFeedFields';

type DuckFeedFormProps = {
  config: DuckFeedFeatureConfig;
};

const FeedForm = ({ config }: DuckFeedFormProps) => {
  return (
    <div>
      <form>
        <DuckFeedFields config={config} />
      </form>
    </div>
  );
}
 
export default FeedForm;