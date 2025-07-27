
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
  <div className="card shadow-lg card-sm bg-base-100 w-full col-span-full">
    <div className="card-body">
      <div className="mx-3">
        <h5 className="card-title">
          {loading ? (
            skeleton({ widthCls: 'w-24', heightCls: 'h-6' })
          ) : (
            <span className="text-base-content opacity-70">About Me</span>
          )}
        </h5>
      </div>
      <div className="text-base-content mx-4 my-2 text-sm leading-relaxed">
        {loading ? (
          renderSkeleton()
        ) : (
          <>
            I'm a marketing and data analyst with experience in digital campaigns and analytics projects.
            I enjoy solving problems with data, turning user behavior into insights, and working across
            teams to drive meaningful outcomes. I'm especially drawn to roles that blend creativity, strategy,
            and data analysis.
          </>
        )}
      </div>
    </div>
  </div>
);

export default AboutCard;
