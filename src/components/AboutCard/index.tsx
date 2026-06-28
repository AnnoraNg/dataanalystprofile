import { skeleton } from '../../utils';

const AboutCard = ({ loading }: { loading: boolean }) => {
  const renderSkeleton = () => (
    <div className="space-y-2">
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <div key={i}>
            {skeleton({ widthCls: 'w-10/12', heightCls: 'h-4', className: 'mb-2' })}
          </div>
        ))}
    </div>
  );

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
              {loading
                ? skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
                : 'About Me'}
            </h3>
          </div>
          <div className="text-base-content text-sm leading-normal">
            {loading ? renderSkeleton() : (
              <>
                Gaming data analyst focused on player behaviour, retention, and live game performance. I break down gameplay data across games, cohorts, and user segments to explain what changed, who drove it, and where to look next.
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
