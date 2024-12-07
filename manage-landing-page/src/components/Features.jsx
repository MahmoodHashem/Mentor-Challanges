const Features = () => {
  
    const features = [
    {
      id: '01',
      title: 'Track company-wide progress',
      description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.'
    },
    {
      id: '02',
      title: 'Advanced built-in reports',
      description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
    },
    {
      id: '03',
      title: 'Everything you need in one place',
      description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
    }
  ]

  return (
    <section className="containe mx-auto px-10 lg:px-28 py-24">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column - Intro */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            What&apos;s different about Manage?
          </h2>
          <p className="text-neutral-grayishBlue">
            Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
          </p>
        </div>

        {/* Right Column - Feature List */}
        <div className="flex-1">
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center md:items-start">
                  <span className="bg-primary-red text-white px-6 py-2 rounded-full">
                    {feature.id}
                  </span>
                </div>
                <div>
                  <h3 className="text-primary-blue font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-grayishBlue">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
