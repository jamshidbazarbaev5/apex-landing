'use client';

import { useScrollAnimation } from "../animations/useScrollAnimation";

export default function FleetEquipment() {
  const { ref, isVisible } = useScrollAnimation();

  const vehicles = [
    {
      id: 1,
      name: "Cargo Van",
      image:'/cargovan.png',
      features: [
        "Single covered van",
        "100% insured",
        "Direct & ASAP delivery"
      ]
    },
    {
      id: 2,
      name: "Sprinter Van",
     image:'/cargovan.png',
      features: [
        "More cargo space",
        "GPS-tracked",
        "Ideal for expedited small loads"
      ]
    },
    {
      id: 3,
      name: "Small Straight",
     image:'/cargovan.png',
      features: [
        "Liftgate optional",
        "Perfect for local LTL and residential deliveries",
        "100% insurance"
      ]
    },
    {
      id: 4,
      name: "Straight Truck",
      image:'/cargovan.png',
      features: [
        "Pallet jack & liftgate",
        "Expedited and regional deliveries",
        "Ideal for medical, trade show, or industrial freight"
      ]
    },
    {
      id: 5,
      name: "Semi Truck",
     image:'/cargovan.png',
      features: [
        "Nationwide coverage",
        "Team drivers available",
        "Perfect for large volume and long-haul freight"
      ]
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .fleet-section {
          background-color: #F5F5F5;
          padding: 80px 40px;
        }

        .fleet-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .fleet-header {
          text-align: center;
          margin-bottom: 60px;
          animation: ${isVisible ? 'fadeInDown 0.6s ease-out' : 'none'};
          opacity: ${isVisible ? 1 : 0};
        }

        .fleet-title {
          font-size: 42px;
          font-weight: 700;
          color: #3d4f5f;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .fleet-subtitle {
          font-size: 18px;
          color: #5f6d7a;
          line-height: 1.6;
        }

        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .vehicle-card {
          background: white;
          border-radius: 20px;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .vehicle-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .vehicle-name {
          font-size: 22px;
          font-weight: 700;
          color: #3d4f5f;
          margin-bottom: 24px;
          text-align: center;
        }

        .vehicle-image-container {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }

        .vehicle-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .vehicle-features {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .vehicle-feature {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 12px;
          padding-left: 12px;
          position: relative;
        }

        .vehicle-feature:before {
          content: "–";
          position: absolute;
          left: 0;
          color: #9ca3af;
        }

        .vehicle-feature:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 1280px) {
          .fleet-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .fleet-section {
            padding: 60px 20px;
          }

          .fleet-title {
            font-size: 32px;
          }

          .fleet-subtitle {
            font-size: 16px;
          }

          .fleet-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .vehicle-card {
            padding: 24px 16px;
          }

          .vehicle-name {
            font-size: 18px;
          }

          .vehicle-image-container {
            height: 140px;
            margin-bottom: 20px;
          }

          .vehicle-feature {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .fleet-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="fleet-section" ref={ref}>
        <div className="fleet-container">
          <div className="fleet-header">
            <h2 className="fleet-title">
              Fleet & Equipment Options
            </h2>
            <p className="fleet-subtitle">
              The right equipment for every type of freight — from local courier runs to cross-country shipments
            </p>
          </div>

          <div className="fleet-grid">
            {vehicles.map((vehicle, index) => (
              <div 
                key={vehicle.id} 
                className="vehicle-card"
                style={{
                  animation: isVisible ? `scaleIn 0.5s ease-out ${index * 0.05}s both` : 'none',
                }}
              >
                <h3 className="vehicle-name">{vehicle.name}</h3>
                <div className="vehicle-image-container">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="vehicle-image"
                  />
                </div>
                <ul className="vehicle-features">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="vehicle-feature">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}